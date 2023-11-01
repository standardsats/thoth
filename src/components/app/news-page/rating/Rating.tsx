// import { FC } from "react";
// import styled from "styled-components";
// import { RatingData } from "@/assets/constants/app/news-page/NewsPage.ts";
// import { sizeVariable } from "@/assets/styles/commonStyles.ts";
//
// //Types
// type RatingProps = {
//   id: string;
//   initialValue: number;
//   ratingData: RatingData;
// };
//
// //Styles
// const StarContainer = styled.div`
//   display: inline-block;
// `;
//
// const Star = styled.img`
//   width: calc(20vw / 14.4);
//   height: calc(20vw / 14.4);
//   cursor: pointer;
//   margin-right: calc(5vw / 14.4);
//
//   @media (max-width: ${sizeVariable}) {
//     width: calc(20vw / 5.09);
//     height: calc(20vw / 5.09);
//   }
// `;
//
// //Component
// export const Rating: FC<RatingProps> = ({ id, initialValue, ratingData }) => {
//   const handleRatingClick = (newRating: number) => {
//     if (newRating === initialValue) {
//       console.log(
//         `Отправить запрос на сервер для новости id=${id} поменять rating на ${0}`
//       );
//     } else {
//       console.log(
//         `Отправить запрос на сервер для новости id=${id} поменять rating на ${newRating}`
//       );
//     }
//   };
//
//   return (
//     <StarContainer>
//       {[1, 2, 3, 4, 5].map((value) => (
//         <Star
//           key={value}
//           src={
//             value <= initialValue
//               ? ratingData.active.src
//               : ratingData.inactive.src
//           }
//           alt={
//             value <= initialValue
//               ? ratingData.active.alt
//               : ratingData.inactive.alt
//           }
//           onClick={() => handleRatingClick(value)}
//         />
//       ))}
//     </StarContainer>
//   );
// };
