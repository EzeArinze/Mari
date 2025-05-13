// import { useParams } from "next/navigation";
import { supabase } from "@/services/supabase_client";
import React from "react";

interface SQRProps {
  params: Promise<{ libId: string }>;
}

async function SearchQueryResult({ params }: SQRProps) {
  // const {libId} = useParams()
  const { libId } = await params;
  // console.log(libId);

  const { data: LIbrary } = await supabase
    .from("Library")
    .select("*")
    .eq("libId", libId);
  console.log(LIbrary?.at(0));

  return <div>page</div>;
}

export default SearchQueryResult;
