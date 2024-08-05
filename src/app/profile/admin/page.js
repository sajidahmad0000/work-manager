async function takeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

export default async function adminPage() {
  await takeTime();
  return (
    <div>
      <h1>this is page for admin inside profile</h1>
    </div>
  );
}
