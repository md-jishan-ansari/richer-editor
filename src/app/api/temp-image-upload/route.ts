import { NextResponse } from "next/server";


export async function POST(request: any) {

      try {
        return NextResponse.json({ link: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg' }, { status: 200 });

      } catch (err) {
        return NextResponse.json({ result: err }, { status: 200 });
      }

  }