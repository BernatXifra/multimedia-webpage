function GlobalInfo() {
  return (
    <div className="globalInfo">
      <div className="globalInfo-video">
        <h3>General information</h3>
        <video controls width="100%" poster="/multimedia-files/girona-poster.jpg">
          <source src="/multimedia-files/girona-video.mp4" type="video/mp4" />
          Video not working
        </video>
        <p className="media-caption">Walking tour of Girona</p>
      </div>

      <div className="globalInfo-audio">
        <div className="audio-card">
          <p>The anthem of Girona FC is a song designed to express pride and a sense of belonging to the fans before matches. The melody is easy to follow and was made so that the public can sing it in chorus, creating a great match atmosphere to encourage the players of the Girona FC team.</p>
          <audio controls>
            <source src="/multimedia-files/himne-gironafc.mp3" type="audio/mp3" />
          </audio>
          <p className="audio-desc">
            Listen to the official anthem of Girona FC
          </p>
        </div>
      </div>
    </div>
  );
}
export default GlobalInfo;
