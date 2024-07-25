type Param = {
  params: {
    id: string;
  };
};

export default function Blog({ params }: Param) {
  return <p> Data {params.id}</p>;
}
