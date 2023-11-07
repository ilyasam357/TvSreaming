import React, { useState, useContext } from "react";
import ReactPlayer from "react-player";
import ChannelList from "./ChannelList";

const channelList = [
  {
    name: "wesaltv",
    url: "https://ams.juraganstreaming.com:5443/LiveApp/streams/wesaltv.m3u8",
  },
  {
    name: "izzahtv",
    url: "https://streaming.radiosalamjambi.com/izzahtv.m3u8",
  },
  {
    name: "adi tv",
    url: "https://v2.siar.us/aditv/livestream/chunks.m3u8",
  },
  {
    name: "kompas",
    url: "https://cdn-telkomsel-01.akamaized.net/Content/HLS/Live/channel(dc9040ad-a4e1-4d08-883c-a65542b69602)/index.m3u8",
  },
  {
    name: "trans7",
    url: "https://master.antosatriani.workers.dev/channel/UCdq-DJ5MS7qjd1aXPFg71Yg.m3u8",
  },
  {
    name: "DAAi",
    url: "https://dacastmmd.mmdlive.lldns.net/dacastmmd/683cc426c19442a4ba31c53be5c963bb/index.m3u8",
  },
  {
    name: "rockAction",
    url: "http://210.210.155.37/dr9445/h/h15/index.m3u8",
  },
  {
    name: "tvN Movies",
    url: "http://210.210.155.37/dr9445/h/h21/index.m3u8",
  },

  // ar

  {
    name:'Mekkah',
    url:'http://m.live.net.sa:1935/live/quran/playlist.m3u8'
  },
  {
    name:'Madinah',
    url:'http://m.live.net.sa:1935/live/sunnah/playlist.m3u8'
  },
  {
    name: "BBCAR",
    url: "https://vs-cmaf-pushb-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_arabic_tv/pc_hd_abr_v2.mpd",
  },
  {
    name: "rotanamus",
    url: "https://daiconnect.com/live/hls/rotana/music/.m3u8",
  },
  {
    name: "QuranRadio",
    url: "https://edge.taghtia.com/sa/13.m3u8",
  },
  {
    name: "Panaroma FM",
    url: "https://shls-panoramafm-prod-dub.shahid.net/out/v1/66262e420d824475aaae794dc2d69f14/index.m3u8",
  },
  // luar
  {
    name: "gotam",
    url: " https://da48ygj8xribp.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-nqz4iiv4surws-ssai-prd/hls-harvester2-1293-prod-eucentral1/eu-central-1/cc-nqz4iiv4surws/master.m3u8?ads.device_did=%7BPSID%7D&ads.device_dnt=%7BTARGETOPT%7D&ads.app_domain=%7BAPP_DOMAIN%7D&ads.app_name=%7BAPP_NAME%7D&ads.consent=%7BTC_STRING%7D",
  },
];

function TVStreaming() {
  const [currentChannel, setCurrentChannel] = useState('https://youtu.be/6BJC9LOvfJc');
  const changeChannel = (videoUrl) => {
    setCurrentChannel(videoUrl);
  };

  return (
    <div className="block md:flex justify-center min-h-screen items-center gap-5 mt-3">
      <div id="video-container" className=" block ml-5 mr-5">
     
        <ReactPlayer
        width="100%"
          playing
          controls
          url={currentChannel}
        />
        
      </div>
      <ChannelList channels={channelList} onChannelChange={changeChannel} />
    </div>
  );
}

export default TVStreaming;

//
