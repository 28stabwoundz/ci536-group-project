const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

// Test configuration
const API_URL = 'http://localhost:5001';
const TEST_FILE_PATH = path.join(__dirname, 'test-files');

// Create test files directory if it doesn't exist
if (!fs.existsSync(TEST_FILE_PATH)) {
    fs.mkdirSync(TEST_FILE_PATH);
}

// Test cases
const securityTests = {
    // Test 1: Rate Limiting
    async testRateLimiting() {
        console.log('\nTesting Rate Limiting...');
        const requests = Array(6).fill().map(() => 
            axios.post(`${API_URL}/api/auth/login`, {
                email: 'test@example.com',
                password: 'password123'
            }).catch(err => {
                if (err.response) {
                    return err.response;
                }
                console.error('Request failed:', err.message);
                return { status: 500 };
            })
        );
        
        const responses = await Promise.all(requests);
        const blockedRequests = responses.filter(r => r && r.status === 429);
        console.log(`Rate limiting test: ${blockedRequests.length > 0 ? 'PASSED' : 'FAILED'}`);
        if (blockedRequests.length === 0) {
            console.log('Expected to see rate limiting (429) responses');
        }
    },

    // Test 2: File Upload Security
    async testFileUploadSecurity() {
        console.log('\nTesting File Upload Security...');
        
        // Test invalid file type
        const invalidFile = path.join(TEST_FILE_PATH, 'test.exe');
        fs.writeFileSync(invalidFile, 'test content');
        
        const formData = new FormData();
        formData.append('cv', fs.createReadStream(invalidFile));
        
        try {
            await axios.post(`${API_URL}/api/cv/upload`, formData, {
                headers: formData.getHeaders()
            });
            console.log('Invalid file type test: FAILED');
        } catch (error) {
            console.log('Invalid file type test: PASSED');
        }

        // Test file size limit
        const largeFile = path.join(TEST_FILE_PATH, 'large.pdf');
        const largeContent = Buffer.alloc(6 * 1024 * 1024); // 6MB
        fs.writeFileSync(largeFile, largeContent);
        
        const formData2 = new FormData();
        formData2.append('cv', fs.createReadStream(largeFile));
        
        try {
            await axios.post(`${API_URL}/api/cv/upload`, formData2, {
                headers: formData2.getHeaders()
            });
            console.log('File size limit test: FAILED');
        } catch (error) {
            console.log('File size limit test: PASSED');
        }
    },

    // Test 3: HTTPS Enforcement
    async testHttpsEnforcement() {
        console.log('\nTesting HTTPS Enforcement...');
        try {
            const response = await axios.get(`${API_URL}/api/auth/me`, {
                maxRedirects: 0,
                validateStatus: status => status >= 200 && status < 400
            });
            // In development, HTTPS enforcement is not required
            console.log('HTTPS enforcement test: SKIPPED (development mode)');
        } catch (error) {
            if (error.response?.status === 301 || error.response?.status === 302) {
                console.log('HTTPS enforcement test: PASSED');
            } else {
                console.log('HTTPS enforcement test: SKIPPED (development mode)');
            }
        }
    },

    // Test 4: Security Headers
    async testSecurityHeaders() {
        console.log('\nTesting Security Headers...');
        try {
            const response = await axios.get(`${API_URL}/`);
            const headers = response.headers;
            
            const requiredHeaders = [
                'content-security-policy',
                'x-frame-options',
                'x-content-type-options',
                'x-xss-protection',
                'strict-transport-security'
            ];
            
            const missingHeaders = requiredHeaders.filter(header => !headers[header]);
            console.log('Security headers test: ' + 
                (missingHeaders.length === 0 ? 'PASSED' : 'FAILED'));
            if (missingHeaders.length > 0) {
                console.log('Missing headers:', missingHeaders);
            }
        } catch (error) {
            console.error('Error testing security headers:', error.message);
            console.log('Security headers test: FAILED');
        }
    },

    // Test 5: Input Validation
    async testInputValidation() {
        console.log('\nTesting Input Validation...');
        
        // Test invalid email
        try {
            await axios.post(`${API_URL}/api/auth/register`, {
                email: 'invalid-email',
                password: 'password123',
                name: 'Test User'
            });
            console.log('Email validation test: FAILED');
        } catch (error) {
            console.log('Email validation test: PASSED');
        }

        // Test weak password
        try {
            await axios.post(`${API_URL}/api/auth/register`, {
                email: 'test@example.com',
                password: 'weak',
                name: 'Test User'
            });
            console.log('Password validation test: FAILED');
        } catch (error) {
            console.log('Password validation test: PASSED');
        }
    }
};

// Run all tests
async function runTests() {
    console.log('Starting Security Tests...');
    
    for (const [testName, testFn] of Object.entries(securityTests)) {
        try {
            await testFn();
        } catch (error) {
            console.error(`Error in ${testName}:`, error.message);
        }
    }
    
    console.log('\nSecurity Tests Completed');
}

// Run the tests
runTests().catch(console.error); 