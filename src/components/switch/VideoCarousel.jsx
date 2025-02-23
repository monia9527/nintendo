import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../../constants"; 
import { pauseImg, playImg, replayImg } from "../../utils/index";

const VideoCarousel = () => {
  const videoRef = useRef([]);    
  const videoSpanRef = useRef([]); 
  const videoDivRef = useRef([]);  

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,  
    isLastVideo: false,
    isPlaying: false,
  });
  const [loadedData, setLoadedData] = useState([]); 

  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  // 进度条动画,使用use副作用管理工具
  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      // 创建进度条动画
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          if (progress !== currentProgress) {
            currentProgress = progress;

            // 进度条外层小圆点大小
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });

            // 进度条颜色 & 宽度
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "#333",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            // 播放完后，恢复灰色
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#ccc",
            });
          }
        },
      });
      

      // 如果是第 0 个视频，重启进度动画
      if (videoId === 0) {
        anim.restart();
      }

      // 实时更新进度条动画
      const animUpdate = () => {
        // 当前播放进度 / 预设视频总时长
        const duration = hightlightsSlides[videoId].videoDuration;
        const currentTime = videoRef.current[videoId]?.currentTime || 0;
        anim.progress(currentTime / duration);
      };

      // 若正在播放，则在帧循环里更新
      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  // 控制视频播放/暂停
  useEffect(() => {
    // 当所有视频元数据都加载后，根据 isPlaying 决定播放或暂停
    if (loadedData.length >= hightlightsSlides.length) {
      const currentVideo = videoRef.current[videoId];
      if (!isPlaying) {
        currentVideo.pause();
      } else {
        startPlay && currentVideo.play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  // 事件处理函数
  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        // 当前视频结束，播放下一个
        setVideo((pre) => ({
          ...pre,
          isEnd: true,
          videoId: i + 1,
        }));
        break;
      case "video-last":
        // 已是最后一个视频
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;
      case "video-reset":
        // 重置到第一个视频
        setVideo({
          isEnd: false,
          startPlay: false,
          videoId: 0,
          isLastVideo: false,
          isPlaying: false,
        });
        break;
      case "pause":
      case "play":
        // 切换播放 / 暂停
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;
      case "video-jump":
        // 点击进度小圆点时，切换到第 i 个视频
        setVideo({
          isEnd: false,
          startPlay: false,
          videoId: i,
          isLastVideo: i === hightlightsSlides.length - 1,
          isPlaying: false,
        });
        break;
      default:
        return video;
    }
  };

  useEffect(() => {
    videoRef.current.forEach((vid, idx) => {
      // 除了当前 videoId 之外，全部暂停
      if (idx !== video.videoId && vid) {
        vid.pause();
      }
    });
  }, [video.videoId]);

  // 视频元数据加载完毕后，存入 loadedData
  const handleLoadedMetaData = (i, e) => {
    setLoadedData((pre) => [...pre, e]);
  };

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  className="pointer-events-none scale-[1.05]" 
                  playsInline
                  muted
                  preload="auto"
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() =>
                    i !== hightlightsSlides.length - 1
                      ? setVideo({ ...video, isEnd: true, videoId: i + 1 })
                      : setVideo({ ...video, isLastVideo: true })
                  }
                  onPlay={() => setVideo((pre) => ({ ...pre, isPlaying: true }))}
                  onLoadedMetadata={(e) => setLoadedData((pre) => [...pre, e])}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              {/* 文字部分：颜色改成黑色 */}
              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, idx) => (
                  <p
                    key={idx}
                    className="md:text-2xl text-xl font-medium text-black drop-shadow"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 进度指示器 */}
      <div className="relative flex-center mt-12">
        <div className="flex-center py-4 px-6 bg-gray-200/80 backdrop-blur-lg rounded-full">
          {hightlightsSlides.map((_, i) => (
            <span
              key={i}
              onClick={() => setVideo({ ...video, videoId: i })}
              className="mx-2 w-3 h-3 bg-gray-100 rounded-full relative cursor-pointer border border-gray-400"
              ref={(el) => (videoDivRef.current[i] = el)}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>

        {/* 播放/暂停/重播按钮 */}
        <button className="control-btn bg-gray-300 border border-gray-400 rounded-full p-3 ml-4">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastVideo
                ? () => setVideo({
                    isEnd: false,
                    startPlay: false,
                    videoId: 0,
                    isLastVideo: false,
                    isPlaying: false,
                  })
                : !isPlaying
                ? () => setVideo((pre) => ({ ...pre, isPlaying: true }))
                : () => setVideo((pre) => ({ ...pre, isPlaying: false }))
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
