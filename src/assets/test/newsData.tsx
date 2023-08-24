export type NewsSlideType = {
  id: string;
  date: string;
  url: string;
  views: number;
  rating: number;
  span: string;
  title: string;
  text: string;
};

export type newsDataType = NewsSlideType[];

export const newsData: newsDataType = [
  {
    id: "1",
    date: "01.01.2001",
    url: "https://picsum.photos/400/300",
    views: 1,
    rating: 5,
    span: "Corporate News",
    title: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mauris eu urna fringilla rhoncus. Integer sit amet facilisis lectus. Integer in ante sed metus lacinia mattis. Aenean eu augue venenatis, fermentum mauris at, hendrerit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu dolor vitae mi venenatis euismod non et enim. Vivamus non lobortis arcu. Nunc semper quam et arcu laoreet, a vulputate tortor bibendum. Nulla facilisi. In pharetra orci vel ipsum scelerisque, vel pellentesque metus facilisis.\n" +
      "\n" +
      "Sed feugiat hendrerit libero, ac tincidunt urna venenatis nec. Quisque euismod tincidunt sollicitudin. Sed malesuada urna sit amet diam efficitur tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius erat at ex accumsan, id fringilla tellus pellentesque. Sed sed enim quis elit vestibulum laoreet sed a nunc. Quisque suscipit consectetur sapien ut ultrices. Sed ac justo interdum, pellentesque neque eu, ultrices ex. Nullam tincidunt hendrerit quam, ac interdum elit gravida nec. Donec cursus erat a varius vestibulum. Aliquam id venenatis metus.\n" +
      "\n" +
      "Praesent efficitur, velit in euismod posuere, purus nisl interdum metus, nec lacinia purus tortor eu urna. Pellentesque vel tortor vel justo scelerisque laoreet. Suspendisse auctor, metus in facilisis tincidunt, dui dui aliquet urna, vel interdum leo sapien sed nulla. Cras et velit sit amet urna sodales ullamcorper nec id tortor. Proin facilisis ligula et est dictum, at elementum felis finibus. Suspendisse id hendrerit dolor. Nullam feugiat leo et arcu mattis, id venenatis arcu fringilla. Nam fringilla enim et libero scelerisque, at consequat ligula tempus. Nulla facilisi. Fusce nec dolor id ante accumsan blandit. Morbi vestibulum dolor libero, sed egestas libero vulputate nec. Ut a justo sit amet nunc facilisis faucibus. Sed sit amet enim venenatis, faucibus elit ut, fermentum erat. Proin non eros sed odio imperdiet vestibulum ac eget tellus. Integer fringilla auctor nulla, eu suscipit nisl rhoncus non.",
  },
  {
    id: "2",
    date: "02.02.2002",
    url: "https://picsum.photos/400/300",
    views: 0,
    rating: 4,
    span: "Corporate News",
    title: "Title 2",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mauris eu urna fringilla rhoncus. Integer sit amet facilisis lectus. Integer in ante sed metus lacinia mattis. Aenean eu augue venenatis, fermentum mauris at, hendrerit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu dolor vitae mi venenatis euismod non et enim. Vivamus non lobortis arcu. Nunc semper quam et arcu laoreet, a vulputate tortor bibendum. Nulla facilisi. In pharetra orci vel ipsum scelerisque, vel pellentesque metus facilisis.\n" +
      "\n" +
      "Sed feugiat hendrerit libero, ac tincidunt urna venenatis nec. Quisque euismod tincidunt sollicitudin. Sed malesuada urna sit amet diam efficitur tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius erat at ex accumsan, id fringilla tellus pellentesque. Sed sed enim quis elit vestibulum laoreet sed a nunc. Quisque suscipit consectetur sapien ut ultrices. Sed ac justo interdum, pellentesque neque eu, ultrices ex. Nullam tincidunt hendrerit quam, ac interdum elit gravida nec. Donec cursus erat a varius vestibulum. Aliquam id venenatis metus.",
  },
  {
    id: "3",
    date: "03.03.2003",
    url: "https://picsum.photos/400/300",
    views: 1,
    rating: 0,
    span: "Corporate News",
    title: "Title 3",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mauris eu urna fringilla rhoncus. Integer sit amet facilisis lectus. Integer in ante sed metus lacinia mattis. Aenean eu augue venenatis, fermentum mauris at, hendrerit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu dolor vitae mi venenatis euismod non et enim. Vivamus non lobortis arcu. Nunc semper quam et arcu laoreet, a vulputate tortor bibendum. Nulla facilisi. In pharetra orci vel ipsum scelerisque, vel pellentesque metus facilisis.\n" +
      "\n" +
      "Sed feugiat hendrerit libero, ac tincidunt urna venenatis nec. Quisque euismod tincidunt sollicitudin. Sed malesuada urna sit amet diam efficitur tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius erat at ex accumsan, id fringilla tellus pellentesque. Sed sed enim quis elit vestibulum laoreet sed a nunc. Quisque suscipit consectetur sapien ut ultrices. Sed ac justo interdum, pellentesque neque eu, ultrices ex. Nullam tincidunt hendrerit quam, ac interdum elit gravida nec. Donec cursus erat a varius vestibulum. Aliquam id venenatis metus.\n" +
      "\n" +
      "Praesent efficitur, velit in euismod posuere, purus nisl interdum metus, nec lacinia purus tortor eu urna. Pellentesque vel tortor vel justo scelerisque laoreet. Suspendisse auctor, metus in facilisis tincidunt, dui dui aliquet urna, vel interdum leo sapien sed nulla. Cras et velit sit amet urna sodales ullamcorper nec id tortor. Proin facilisis ligula et est dictum, at elementum felis finibus. Suspendisse id hendrerit dolor. Nullam feugiat leo et arcu mattis, id venenatis arcu fringilla. Nam fringilla enim et libero scelerisque, at consequat ligula tempus. Nulla facilisi. Fusce nec dolor id ante accumsan blandit. Morbi vestibulum dolor libero, sed egestas libero vulputate nec. Ut a justo sit amet nunc facilisis faucibus. Sed sit amet enim venenatis, faucibus elit ut, fermentum erat. Proin non eros sed odio imperdiet vestibulum ac eget tellus. Integer fringilla auctor nulla, eu suscipit nisl rhoncus non.",
  },
  {
    id: "4",
    date: "04.04.2004",
    url: "https://picsum.photos/400/300",
    views: 0,
    rating: 0,
    span: "Corporate News",
    title: "Title 4",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mauris eu urna fringilla rhoncus. Integer sit amet facilisis lectus. Integer in ante sed metus lacinia mattis. Aenean eu augue venenatis, fermentum mauris at, hendrerit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu dolor vitae mi venenatis euismod non et enim. Vivamus non lobortis arcu. Nunc semper quam et arcu laoreet, a vulputate tortor bibendum. Nulla facilisi. In pharetra orci vel ipsum scelerisque, vel pellentesque metus facilisis.\n" +
      "\n" +
      "Sed feugiat hendrerit libero, ac tincidunt urna venenatis nec. Quisque euismod tincidunt sollicitudin. Sed malesuada urna sit amet diam efficitur tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius erat at ex accumsan, id fringilla tellus pellentesque. Sed sed enim quis elit vestibulum laoreet sed a nunc. Quisque suscipit consectetur sapien ut ultrices. Sed ac justo interdum, pellentesque neque eu, ultrices ex. Nullam tincidunt hendrerit quam, ac interdum elit gravida nec. Donec cursus erat a varius vestibulum. Aliquam id venenatis metus.\n" +
      "\n" +
      "Praesent efficitur, velit in euismod posuere, purus nisl interdum metus, nec lacinia purus tortor eu urna. Pellentesque vel tortor vel justo scelerisque laoreet. Suspendisse auctor, metus in facilisis tincidunt, dui dui aliquet urna, vel interdum leo sapien sed nulla. Cras et velit sit amet urna sodales ullamcorper nec id tortor. Proin facilisis ligula et est dictum, at elementum felis finibus. Suspendisse id hendrerit dolor. Nullam feugiat leo et arcu mattis, id venenatis arcu fringilla. Nam fringilla enim et libero scelerisque, at consequat ligula tempus. Nulla facilisi. Fusce nec dolor id ante accumsan blandit. Morbi vestibulum dolor libero, sed egestas libero vulputate nec. Ut a justo sit amet nunc facilisis faucibus. Sed sit amet enim venenatis, faucibus elit ut, fermentum erat. Proin non eros sed odio imperdiet vestibulum ac eget tellus. Integer fringilla auctor nulla, eu suscipit nisl rhoncus non.",
  },
  {
    id: "5",
    date: "05.05.2005",
    url: "https://picsum.photos/400/300",
    span: "Corporate News",
    views: 0,
    rating: 4,
    title: "Title 5",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mauris eu urna fringilla rhoncus. Integer sit amet facilisis lectus. Integer in ante sed metus lacinia mattis. Aenean eu augue venenatis, fermentum mauris at, hendrerit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu dolor vitae mi venenatis euismod non et enim. Vivamus non lobortis arcu. Nunc semper quam et arcu laoreet, a vulputate tortor bibendum. Nulla facilisi. In pharetra orci vel ipsum scelerisque, vel pellentesque metus facilisis.\n" +
      "\n" +
      "Sed feugiat hendrerit libero, ac tincidunt urna venenatis nec. Quisque euismod tincidunt sollicitudin. Sed malesuada urna sit amet diam efficitur tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius erat at ex accumsan, id fringilla tellus pellentesque. Sed sed enim quis elit vestibulum laoreet sed a nunc. Quisque suscipit consectetur sapien ut ultrices. Sed ac justo interdum, pellentesque neque eu, ultrices ex. Nullam tincidunt hendrerit quam, ac interdum elit gravida nec. Donec cursus erat a varius vestibulum. Aliquam id venenatis metus.\n" +
      "\n" +
      "Praesent efficitur, velit in euismod posuere, purus nisl interdum metus, nec lacinia purus tortor eu urna. Pellentesque vel tortor vel justo scelerisque laoreet. Suspendisse auctor, metus in facilisis tincidunt, dui dui aliquet urna, vel interdum leo sapien sed nulla. Cras et velit sit amet urna sodales ullamcorper nec id tortor. Proin facilisis ligula et est dictum, at elementum felis finibus. Suspendisse id hendrerit dolor. Nullam feugiat leo et arcu mattis, id venenatis arcu fringilla. Nam fringilla enim et libero scelerisque, at consequat ligula tempus. Nulla facilisi. Fusce nec dolor id ante accumsan blandit. Morbi vestibulum dolor libero, sed egestas libero vulputate nec. Ut a justo sit amet nunc facilisis faucibus. Sed sit amet enim venenatis, faucibus elit ut, fermentum erat. Proin non eros sed odio imperdiet vestibulum ac eget tellus. Integer fringilla auctor nulla, eu suscipit nisl rhoncus non.",
  },
  {
    id: "6",
    date: "06.06.2006",
    url: "https://picsum.photos/400/300",
    span: "Corporate News",
    views: 0,
    rating: 4,
    title: "Title 6",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mauris eu urna fringilla rhoncus. Integer sit amet facilisis lectus. Integer in ante sed metus lacinia mattis. Aenean eu augue venenatis, fermentum mauris at, hendrerit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu dolor vitae mi venenatis euismod non et enim. Vivamus non lobortis arcu. Nunc semper quam et arcu laoreet, a vulputate tortor bibendum. Nulla facilisi. In pharetra orci vel ipsum scelerisque, vel pellentesque metus facilisis.\n" +
      "\n" +
      "Sed feugiat hendrerit libero, ac tincidunt urna venenatis nec. Quisque euismod tincidunt sollicitudin. Sed malesuada urna sit amet diam efficitur tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius erat at ex accumsan, id fringilla tellus pellentesque. Sed sed enim quis elit vestibulum laoreet sed a nunc. Quisque suscipit consectetur sapien ut ultrices. Sed ac justo interdum, pellentesque neque eu, ultrices ex. Nullam tincidunt hendrerit quam, ac interdum elit gravida nec. Donec cursus erat a varius vestibulum. Aliquam id venenatis metus.\n" +
      "\n" +
      "Praesent efficitur, velit in euismod posuere, purus nisl interdum metus, nec lacinia purus tortor eu urna. Pellentesque vel tortor vel justo scelerisque laoreet. Suspendisse auctor, metus in facilisis tincidunt, dui dui aliquet urna, vel interdum leo sapien sed nulla. Cras et velit sit amet urna sodales ullamcorper nec id tortor. Proin facilisis ligula et est dictum, at elementum felis finibus. Suspendisse id hendrerit dolor. Nullam feugiat leo et arcu mattis, id venenatis arcu fringilla. Nam fringilla enim et libero scelerisque, at consequat ligula tempus. Nulla facilisi. Fusce nec dolor id ante accumsan blandit. Morbi vestibulum dolor libero, sed egestas libero vulputate nec. Ut a justo sit amet nunc facilisis faucibus. Sed sit amet enim venenatis, faucibus elit ut, fermentum erat. Proin non eros sed odio imperdiet vestibulum ac eget tellus. Integer fringilla auctor nulla, eu suscipit nisl rhoncus non.",
  },
];
