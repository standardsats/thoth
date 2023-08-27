// import { FC, useState } from "react";
// import styled from "styled-components";
// import { DescriptionTHOH } from "@/components/app/common/descriptionTHOH/descriptionTHOH.tsx";
// import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
// import {
//   colorVariables,
//   coverImage,
//   sizeVariable,
// } from "@/assets/styles/commonStyles.ts";
// import { Scrollbar } from "./scrollbar/Scrollbar.tsx";
// import ReactPlayer from "react-player";
// import { Subtitle } from "@/components/app/common/subtitle/Subtitle.tsx";
// import { SubtitleText } from "@/components/app/common/subtitle-text/SubtitleText.tsx";
// import {
//   productsAndServiceImages,
//   VideoSliderType,
//   VideoType,
// } from "@/assets/constants/app/main-page/ProductAndService.ts";
//
// const { darkColor, blackColor } = colorVariables;
//
// // Types
// type Props = {
//   videoSlider: VideoSliderType;
// };
//
// //Styles
// const StyledSlider = styled.section`
//   width: 100vw;
//   box-sizing: border-box;
//   padding: calc(50vw / 14.4);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;
//
// const StyledSliderContainer = styled.div`
//   width: 100vw;
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: center;
//
//   @media (max-width: ${sizeVariable}) {
//     flex-direction: column;
//   }
// `;
//
// const StyledSectionTitle = styled(SectionTitle)`
//   width: 80%;
// `;
//
// const StyledDescriptionTHOH = styled(DescriptionTHOH)`
//   margin: 1vw 0 2.57vw;
// `;
//
// const StyledVideoContainer = styled.div`
//   width: 54%;
//
//   @media (max-width: ${sizeVariable}) {
//     width: 100%;
//     margin-bottom: 4vw;
//   }
// `;
//
// const StyledSlideContainerWrapper = styled.div`
//   border-radius: 20px;
//   width: 37%;
//   ${coverImage};
//   height: auto;
//   background-image: url(${productsAndServiceImages.videoBackground});
//
//   @media (max-width: ${sizeVariable}) {
//     width: 100%;
//     border-radius: 0;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//   }
// `;
//
// const StyledSlideContainer = styled.div``;
//
// const StyledSlide = styled.div`
//   margin: 2.23vw 1.23vw;
//   box-sizing: border-box;
//   width: 28.26vw;
//   cursor: pointer;
//   border-radius: 20px;
//
//   @media (max-width: ${sizeVariable}) {
//     width: 81.3vw;
//     margin: 6vw 3vw 0 3vw;
//   }
// `;
//
// const StyledSlideTitle = styled(SubtitleText)`
//   max-width: 100%;
//   padding: 0 0 0 2.5vw;
//   color: ${darkColor};
//   font-size: calc(25vw / 14.4);
//   line-height: 1.5;
//   letter-spacing: -0.5px;
//
//   @media (max-width: ${sizeVariable}) {
//     font-size: calc(25vw / 5.08);
//   }
// `;
//
// const StyledSelectedTitle = styled(Subtitle)`
//   max-width: 100%;
//   padding: 0 0 0 2.5vw;
//   color: ${darkColor};
//   font-size: calc(35vw / 14.4);
//   line-height: 1.5;
//   letter-spacing: -0.5px;
//
//   @media (max-width: ${sizeVariable}) {
//     font-size: calc(25vw / 5.08);
//   }
// `;
//
// const StyledSelectedSlide = styled.div`
//   margin: 0 1.23vw 0.79vw;
//
//   @media (max-width: ${sizeVariable}) {
//     margin: 0 6.1vw;
//   }
// `;
//
// const StyledSlideContent = styled.div`
//   overflow: hidden;
//   background: ${blackColor};
//   width: 100%;
//   border-radius: 20px;
//   height: 14.73vw;
//   cursor: pointer;
//
//   @media (max-width: ${sizeVariable}) {
//     height: 44.48vw;
//   }
// `;
//
// const StyledSelectedContent = styled.div`
//   overflow: hidden;
//   background: ${blackColor};
//   height: 37vw;
//   width: 100%;
//   border-radius: 20px;
//   cursor: pointer;
//
//   @media (max-width: ${sizeVariable}) {
//     height: 53.34vw;
//   }
// `;
//
// //Components
// export const VideoSlider: FC<Props> = ({ videoSlider }) => {
//   const { title, text, video } = videoSlider;
//   const [selectedSlide, setSelectedSlide] = useState<VideoType>(video[0]);
//
//   const handleVideoClick = (slideId: string) => {
//     const selectedMovie = video.find((movie) => movie.id === slideId);
//     if (selectedMovie) {
//       setSelectedSlide(selectedMovie);
//     }
//   };
//
//   return (
//     <StyledSlider>
//       <StyledSectionTitle color={darkColor}>{title}</StyledSectionTitle>
//       <StyledDescriptionTHOH color={darkColor}>{text}</StyledDescriptionTHOH>
//       <StyledSliderContainer>
//         <StyledVideoContainer>
//           {/* Видео */}
//           {selectedSlide && (
//             <StyledSelectedSlide key={selectedSlide.id}>
//               <StyledSelectedContent>
//                 <ReactPlayer
//                   url={selectedSlide.content}
//                   width="100%"
//                   height="100%"
//                   controls
//                 />
//               </StyledSelectedContent>
//               <StyledSelectedTitle>{selectedSlide.title}</StyledSelectedTitle>
//             </StyledSelectedSlide>
//           )}
//         </StyledVideoContainer>
//         <StyledSlideContainerWrapper>
//           <Scrollbar>
//             <StyledSlideContainer>
//               {video.map((movie) => (
//                 <StyledSlide key={movie.id}>
//                   <StyledSlideContent
//                     onClick={() => {
//                       handleVideoClick(movie.id);
//                     }}
//                   >
//                     <ReactPlayer
//                       style={{ pointerEvents: "none" }}
//                       key={movie.id}
//                       url={movie.content}
//                       width="100%"
//                       height="100%"
//                       light={true}
//                     />
//                   </StyledSlideContent>
//                   <StyledSlideTitle>{movie.title}</StyledSlideTitle>
//                 </StyledSlide>
//               ))}
//             </StyledSlideContainer>
//           </Scrollbar>
//         </StyledSlideContainerWrapper>
//       </StyledSliderContainer>
//     </StyledSlider>
//   );
// };
