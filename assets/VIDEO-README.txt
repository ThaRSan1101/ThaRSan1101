This folder is for your video and thumbnail.

How to use:
1. Copy your MP4 here and name it `video.mp4`.
2. Create a thumbnail image and name it `thumb.png`.
   - Example ffmpeg command to create thumb at 1s:
     ffmpeg -i video.mp4 -ss 00:00:01 -vframes 1 thumb.png
3. After adding both files, the README's linked thumbnail will open the MP4 in the browser.

If you want me to add the MP4 and generate the thumbnail for you, upload the MP4 into this workspace or tell me its path.