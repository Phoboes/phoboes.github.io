    window.onload = function(){
      speechSynthesis.onvoiceschanged = function() {
        var msg = new SpeechSynthesisUtterance();
        msg.voice = this.getVoices().filter(v => v.name == 'Cellos')[0];
        msg.text = Object.keys(window).join(' ');
        this.speak(msg);
      };
      console.log("Boop.")
    }