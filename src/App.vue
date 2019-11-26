<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <ParentComponent :message="message" />
    <MyintVideoPlayer :video="video" />
  </div>
</template>

<script>
import ParentComponent from './components/ParentComponent.vue';

export default {
    name: 'App',
    components: {
        ParentComponent
    },
    data () {
        return {
            message: 'Parent Component',
            video: {
                "id": "c76dd50d-f226-41e9-97e7-e4dd86cf1fad",
                "jobID": "8590a62b-200f-4e2a-ac72-2a62589f2687",
                "referrer": "https://apply.myinterview.com/9cdf0d1b-5863-4842-a54f-9c443fe27c3f",
                "apiKey": "qDp2egprFa",
                "serverVersion": "2.20.8",
                "platform": {
                    "description": "Chrome 77.0.3865.90 on Windows 10 64-bit",
                    "layout": "Blink",
                    "manufacturer": null,
                    "name": "Chrome",
                    "prerelease": null,
                    "product": null,
                    "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36",
                    "version": "77.0.3865.90",
                    "os": {
                        "architecture": 64,
                        "family": "Windows",
                        "version": "10"
                    }
                },
                "videos": [
                    {
                        "date": "2019-10-10T13:55:27.817Z",
                        "filename": "8341324c-47db-4dcf-ac99-553358b32210",
                        "videoLength": 5,
                        "transcript": "This drunk wasn't on the table.",
                        "question": "Question 1",
                        "retakes": 3,
                        "started": true,
                        "transcoded": true,
                        "completed": true,
                        "hasTranscript": true
                    },
                    {
                        "date": "2019-10-10T13:58:07.022Z",
                        "filename": "7de2e091-777b-44ff-865a-bf543ed4e9c6",
                        "videoLength": 3,
                        "transcript": "Just trying to do this is important.",
                        "question": "Question 2",
                        "retakes": 3,
                        "started": true,
                        "transcoded": true,
                        "completed": true,
                        "hasTranscript": true
                    }
                ],
                "completed": true,
                "language": "en",
                "username": "samuel",
                "email": "sam.teboul+478@gmail.com",
                "clicked": true,
                "started": true,
                "uploaded": true,
                "paid": true,
                "region": "au",
                "serverRegion": "us-east",
                "ip": "185.163.149.80",
                "location": "Tel Aviv, Israel",
                "createdAt": "2019-10-10T13:54:20.023Z",
                "brightnessLevel": [
                    174.4372379969369
                ],
                "bandwidth": "23.8 mB/s",
                "gdprTimestamp": "2019-10-10T13:54:21.475Z",
                "quality": "hd",
                "updatedAt": "2019-11-06T13:42:39.936Z",
                "shareCode": "kBAWu8L3NtFLXEyIxgl1Zg6EWzN4F1yeXZ1z",
                "sharing_enabled": true,
                "enableSharing": true,
                "processTime": 238,
                "processAttempts": 8,
                "commentsArr": [
                    {
                        "reviewerId": "3ddd2245-0a3f-4f06-b72a-b823fff3b7af",
                        "comment": "Test",
                        "reviewer": "Michael",
                        "commentTime": "2019-11-06T13:42:40.857Z"
                    }
                ]
            }
        };
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
