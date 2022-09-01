import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Info() {
  const torrentId = useParams();
  const [info, setInfo] = useState(null);
  useEffect(() => {
    async function getInfo(torrentId) {
      try {
        let res = await fetch(
          `https://torrento.vercel.app/info/${torrentId.id}`
        );
        res = await res.json();
        console.log(res);
        setInfo(res);
      } catch (err) {
        console.log(err);
      }
    }
    getInfo(torrentId);
  }, [torrentId]);
  return (
    <div>
      <div className="main-section">
        <Header />
        <p>Info</p>
        <Link to="/">Back</Link>
      </div>
      <Footer />
    </div>
  );
}

export default Info;

// category: "TV"
// description: null
// downloads: "2198"
// genre: null
// images: (7) ['https://everest.picturedent.org/images/2022/09/01/tmpbanner5691.jpg', 'https://everest.picturedent.org/images/2022/09/01/Harone31343.th.jpg', 'https://everest.picturedent.org/images/2022/09/01/Harone23954.th.jpg', 'https://everest.picturedent.org/images/2022/09/01/Harone13224.th.jpg', 'https://everest.picturedent.org/images/2022/09/01/Harone19381.th.jpg', 'https://everest.picturedent.org/images/2022/09/01/Harone21475.th.jpg', 'https://everest.picturedent.org/images/2022/09/01/Harone20570.th.jpg']
// infoHash: "7F949D28F46CAC816091AA5BA89799A7E9BAC292"
// language: "English"
// lastChecked: "Sep. 01st '22"
// leechers: "605"
// magnetLink: "magnet:?xt=urn:btih:7F949D28F46CAC816091AA5BA89799A7E9BAC292&dn=She-Hulk.Attorney.at.Law.S01E03.1080p.WEB.H264-GLHF%5BTGx%5D&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.birkenwald.de%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentor.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2970%2Fannounce&tr=https%3A%2F%2Ftracker.foreverpirates.co%3A443%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce"
// name: "She-Hulk.Attorney.at.Law.S01E03.1080p.WEB.H264-GLHF[TGx]"
// seeders: "802"
// shortName: null
// size: "1.5 GB"
// thumbnail: null
// type: "HD"
// uploadDate: "Sep. 01st '22"
// uploader: "TGxGoodies"
// uploaderLink: "https://www.1377
