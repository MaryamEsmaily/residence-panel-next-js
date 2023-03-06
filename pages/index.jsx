export default function Home() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "/login",
    },
  };
}
