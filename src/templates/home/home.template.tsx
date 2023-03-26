import Head from "next/head";
import { Grid } from "@/components/grid/grid";

export function HomeTemplate() {
  return (
    <>
      <Head>
        <title>Coffee Delivery | Home</title>
      </Head>

      <Grid>
        <h1>Section</h1>
      </Grid>
    </>
  );
}
