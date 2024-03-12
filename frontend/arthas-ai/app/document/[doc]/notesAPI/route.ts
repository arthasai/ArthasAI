import { createClient } from "@/app/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const supabase = createClient();
  const { data, error } = await supabase.from("user_notes").select("*");
  return NextResponse.json({
    data: data,
    error: error,
    metadata: {
      request: {
        method: request.method,
        path: request.nextUrl.pathname,
      },
    },
  });
}

export async function POST(request: NextRequest) {}
