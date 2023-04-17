const channels = new Map();
channels.set("01", "Globo");
channels.set("05", "SBT");
channels.set("07", "Record");
channels.set("03", "Band");
channels.set("51", "Rede Vida");

class TV {
    constructor() {
        this.viewChannel = "01";
        this.volume = 25;
        this.channels = channels;
    }
    changeChannel(ch = this.viewChannel) {
        this.channels.has(ch) ? (this.viewChannel = this.channels.get(ch)) : "this channel does not exist";
        return this.viewChannel;
    }
    setVolume(vol = this.volume) {
        if (vol > 100 || vol < 0) return;

        return (this.volume = vol);
    }
}

const myTv = new TV();
console.log(myTv.setVolume(50));
console.log(myTv.changeChannel("05"));
