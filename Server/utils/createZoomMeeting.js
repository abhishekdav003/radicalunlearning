// import getZoomAccessToken from './getZoomAccessToken.js'; // Import the token function
// import axios from 'axios'
// export const createZoomMeeting = async (req, res) => {
//   try {
//     const { topic, start_time, duration } = req.body; 
//     const userEmail = "amarjha880@gmail.com"; // <- the Zoom user email (yours if basic)

//     const accessToken = await getZoomAccessToken();

//     const response = await axios.post(
//       `https://api.zoom.us/v2/users/${userEmail}/meetings`,
//       {
//         topic: topic || "P2P Call",
//         type: 1, // 1 = Instant meeting (start immediately)
//         duration: duration || 30, // optional
//         start_time, // optional for scheduled meetings
//         settings: {
//           host_video: true,
//           participant_video: true,
//           join_before_host: true,
//           approval_type: 0,
//         },
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     return res.status(200).json({ meeting: response.data });

//   } catch (error) {
//     console.error(error?.response?.data || error.message);
//     return res.status(500).json({ message: "Failed to create Zoom meeting" });
//   }
// };


import getZoomAccessToken from './getZoomAccessToken.js';
import axios from 'axios';

export async function createZoomMeeting({ topic, scheduledAt }) {
  const accessToken = await getZoomAccessToken();
  const userEmail = "amarjha880@gmail.com";

  const response = await axios.post(
    `https://api.zoom.us/v2/users/${userEmail}/meetings`,
    {
      topic,
      type: 2, // Scheduled meeting
      start_time: new Date(scheduledAt).toISOString(),
      duration: 60,
      timezone: 'UTC',
      settings: {
        join_before_host: true,
        host_video: true,
        participant_video: true,
        approval_type: 0,
      }
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }
    }
  );

  return {
    zoomMeetingId: response.data.id,
    zoomJoinUrl: response.data.join_url,
    zoomStartUrl: response.data.start_url,
  };
}
