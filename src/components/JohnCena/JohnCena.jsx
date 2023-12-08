import audiofile from '../../assets/johncena.mp3'

const MyComponent = () => {
    return (
      <div>
        <audio controls>
          <source src={audioFile} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  };