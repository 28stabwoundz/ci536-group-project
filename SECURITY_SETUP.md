# Security Setup Instructions

## Firebase Credentials Configuration

We've removed the Firebase service account credentials file from version control for security reasons. To make your application work locally, follow these steps:

1. Create a `.env` file in the `backend` directory with the following content:

```
# Firebase Configuration
FIREBASE_PROJECT_ID=ci536integratedgroupproject
FIREBASE_PRIVATE_KEY_ID=5242b5c73ea76595ad18b6a2476ec1386df4f765
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQChC55NMB9i9OdP\nzTNjAx2SNOgizvSHl9yhjY5uN4WFHDzjhs17P96PNEFunH5yGv6mthp3m5s4GXNp\na1YFmPHEYpM0IZO7h6r1pvS1HCCVQWcg/ypj2LvFYnTGvbO5zf5kmmgwbcktncB0\n9qNQb673xgiSGgeeseGEuBTjm0JBOXwY8uZFozKQjWrRkZ8kyYYh5lO2w+Qxzng7\nJ7zxJMSeGz+sXNVobVyYMRd0LVNY5A/dbFw5IkzXx8sSOIykSXX91blo7bxfbNft\ngJAv7J+EPjkG24F1evg641ZxGF2TDegAPjXESCxAb02fmexeoNKGTL0MBcBmcDbv\nl+ggR6/tAgMBAAECggEAIm17qrgkKZE95uExAFRw7KnbS1+vRlJoc+/xWC4N4Oor\nuR8/C79YaohLCaSyYl3TfRu2dkXhbaGBOvLbiahL3QYOvokEDkW/PjMyIoqQC6BW\n9eaerwgtAhIdcUQqKQk4vlSE+/9oT9RmyYpVWPN7NdRTzjn60Yno8miw7IRrKkqS\npKi0Ehx226dxjHXL6kpRBY1NRP3TGYqsLULnJL/6Byox3hmvpu+kdgvqbCkpK+gG\nh8fXCbBsw3xdpAhH+O3QELrczzmbve9Ysc64pSf4V168C0h/TVlDCA8NzNUFkosT\nxOLgfFx8J9RGk2OrYah1vwsHL6KM58wB76vqxN6BUQKBgQDiDfVSC5bPWcHC7twO\nZ2xm0Z5i2RcleAx8W/Ezr7HBHyRb0Ey4eGehASAACth3MoAsPvG7mhQmZuTKXe/f\naF08oxNBBq+ZIXzfAoppU2IzyWobi/KbH1t1ieQufeNDZZcFk5a61xs/yP8Umm58\n5q4Sv16+eXjGtWIOTvKdWto1MQKBgQC2YQwCjKOCbPQrxu3RrZFSGEZkGFTzCFnq\nE2y+Jrp1PkRjFHbO3xHFhIXIoilXx4RBUrlqHB3L9T6eMNfgfRvRqtk++Zy9HMyE\nXpX56e160jO7Ng8QhVsczIpqq0JAPgQyb2IdvN5X3G0fbBWJIEV16mjW+ADmHZg2\nCUC+vGVnfQKBgHOiGD9j1j0y+L6yWLa1iOn/iDmgOwrboedrULLTyOW0/HBK2TPz\nw27EmI3s/lXa6122xQjmBDCwqZArBS0OwcLm2E6HEQQP8URSlGLUWIONIE3/BJb9\nL1estaBinQI40Uv090GUD0hNlM4BQUt65MiKQ/jDQljDJ+mR0OFVPBHBAoGBAK7n\nhUAQpmLXoJc3MS4sObi0hRVLbHSi5rAgruHxfFIiRC2NG5+ruHxnanIOan2/XuvS\nrPTBQCYw7TuCdhXZhctfAPdvJU0MCGtN1qEVIeXvHyOEZZAfhFCrLHe+BExd7WJ9\nBWilj8pNH+3JlyGp7FN4WdEHiL0nVqlD2G7TeKB1AoGBAIBWf2wfO2gii2qMF9f7\nqla+Ke8jBQrIP2h7CHCMW95DJN/HfFNhY2vl1Hgst3j5b/eMywP9SQ1YRFFPm6/D\nXCXEH+1utccGrb8SwQDmxOWVc1l8UJDDCS0TsNkcjckY2ZvaYE3RYjmrZ8BaCkr0\nlm5iaQjnaBT7sUCtTStQ16Bo\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@ci536integratedgroupproject.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=102460566242688469702
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
FIREBASE_CLIENT_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40ci536integratedgroupproject.iam.gserviceaccount.com
FIREBASE_STORAGE_BUCKET=ci536integratedgroupproject.appspot.com
```

2. Make sure the `.env` file is included in your `.gitignore` file to prevent accidental commits of sensitive credentials

3. For production deployments, set these environment variables in your hosting environment instead of using a .env file

## Security Best Practices

1. **Never commit sensitive credentials** to version control
2. Use environment variables for sensitive information
3. Rotate credentials periodically
4. Consider using Firebase Admin SDK with limited permissions for specific services
5. In production, use secret management services provided by your hosting platform

## Next Steps for Better Security

1. **Regenerate Firebase service account credentials** since the previous ones were exposed in Git history
2. Implement proper secret rotation procedures
3. Consider using a secrets management solution for your team 