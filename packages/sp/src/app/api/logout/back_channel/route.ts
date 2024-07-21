type FormData = {
  logout_token: string;
};

export async function POST(request: Request) {
  console.log('----- BACK CHANNEL LOGOUT -----');

  // Content-Type application/x-www-form-urlencoded のデータを取得
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as FormData;
  console.log(data.logout_token);

  console.log('----- BACK CHANNEL LOGOUT COMPLETE -----');

  // No content
  return new Response(null, { status: 204 });
}
