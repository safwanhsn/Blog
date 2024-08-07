const axiosClient = require("../../config/axios")();
// Require module is different

async function getData() {
  const res = await axiosClient.get("/articles/1");
  return res.data;
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{data.data.attributes.Content}</div>
    </main>
  );
}
