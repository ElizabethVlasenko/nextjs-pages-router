import Head from "next/head";
import { useRouter } from "next/router";

function Cabin() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Cabin #{router.query.cabinId} | The Wild Oasis</title>
        <link rel="icon" href="logo.png" />
      </Head>
      <div>Cabin #{router.query.cabinId}</div>
    </>
  );
}

export default Cabin;
