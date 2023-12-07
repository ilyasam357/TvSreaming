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
    name: "QuranRadio",
    url: "https://edge.taghtia.com/sa/13.m3u8",
  },
  
  // luar

  
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
