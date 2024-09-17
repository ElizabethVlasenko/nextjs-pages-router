import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import Head from "next/head";

//Dynamically generated (SSR)
export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);
  return {
    props: {
      cabin,
    },
    //revalidate: 3600, //Incremental Static Regeneration (ISR)
  };
}

// getStaticPaths + getStaticProps - generates static route that has dynamic segments

function Cabin({ cabin }) {
  // const router = useRouter();

  return (
    <>
      <Head>
        <title>Cabin #{cabin.name} | The Wild Oasis</title>
        <link rel="icon" href="logo.png" />
      </Head>
      <div className="max-w-6xl mx-auto mt-8">
        <CabinView cabin={cabin} />
      </div>
    </>
  );
}

export default Cabin;
