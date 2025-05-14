
import speech_recognition as sr
import pyttsx3
import pyaudio

def transcribe_audio_file(file_path, output_path="transcription.txt"):
    recognizer = sr.Recognizer()

    try:
        with sr.AudioFile(file_path) as source:
            audio = recognizer.record(source)  # read the entire audio file
            text = recognizer.recognize_google(audio)

            with open(output_path, "w", encoding="utf-8") as f:
                f.write(text)

            print(f"Transcription saved to: {output_path}")

            # Use Google's speech recognition
            text = recognizer.recognize_google(audio)

    except FileNotFoundError:
        print("File not found.")
    except sr.UnknownValueError:
        print("Could not understand the audio.")
    except sr.RequestError as e:
        print(f"Could not request results; {e}")

if __name__ == "__main__":
    audio_file_path = "testing.wav"  # Replace with your own audio file path.
    output_text_file = "output_transcription.txt"  # Change to the name of the person being interviewed
    transcribe_audio_file(audio_file_path, output_text_file)