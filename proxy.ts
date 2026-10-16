import { NextResponse } from "next/server";
import { assertAdminEnv } from "@/lib/firebase-admin";
export function proxy() {
  try { assertAdminEnv(); } catch {
    return NextResponse.json({ code: "PROGRAM_NOT_OPEN", error: "El programa aún no abre sus registros." }, {
      status: 503, headers: { "Cache-Control": "no-store" },
    });
  }
  return NextResponse.next();
}
export const config = { matcher: "/api/:path*" };
