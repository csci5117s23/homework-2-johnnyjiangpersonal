import { withClerkMiddleware, getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default withClerkMiddleware((req) => {
  const { userId } = getAuth(req);
  return NextResponse.next();
});