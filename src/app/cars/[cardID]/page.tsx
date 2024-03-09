import React, { FC } from 'react';

type Props = {
  params: { cardID: string };
};
const page: FC<Props> = ({ params }) => {
  return <div> Car {params?.cardID}</div>;
};

export default page;
