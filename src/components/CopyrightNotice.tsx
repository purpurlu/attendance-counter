interface CopyrightNoticeProps {
  // ? makes a property optional: https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties
  author?: string;
  year: number;
}
// TWO VERSIONS:
// 1 {isAuthorPresent ? ({author}) : (but to nobody in particular) }

// 2  {author ? ({author}) : (but to nobody in particular) }}

// VERSION 1
// export default function CopyrightNotice({
//   author,
//   year,
// }: CopyrightNoticeProps): JSX.Element {
//   // truthiness check: https://developer.mozilla.org/en-US/docs/Glossary/Truthy
//   const isAuthorPresent = author != null;
//     return (
//       <>
//         <p>
//           Copyright {year}, 
//           {isAuthorPresent ? (<> {author}</>) : (<>but to nobody in particular</>) }
//         </p>
//       </>
//     );    
//   }

// VERSION 2
  export default function CopyrightNotice({
    author,
    year,
  }: CopyrightNoticeProps): JSX.Element {
    // truthiness check: https://developer.mozilla.org/en-US/docs/Glossary/Truthy
    //const isAuthorPresent = author != null;
      return (
        <>
          <p>
            Copyright {year}, 
            {author ? (<> {author}</>) : (<>but to nobody in particular</>) }
          </p>
        </>
      );    
    }

// export default function CopyrightNotice({
//   author,
//   year,
// }: CopyrightNoticeProps): JSX.Element {
//   // truthiness check: https://developer.mozilla.org/en-US/docs/Glossary/Truthy
//   if (author) {
//     return (
//       <>
//         <p>
//           Copyright {year}, {author}
//         </p>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <p>Copyright {year} (but to nobody in particular)</p>
//       </>
//     );
//   }
// }



