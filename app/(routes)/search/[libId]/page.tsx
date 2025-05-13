// import { useParams } from "next/navigation";
import DisplayResult from "@/components/search/display_result";
import Header from "@/components/search/header";
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

  return (
    <div>
      <Header SearchRecord={LIbrary?.at(0)} />
      <div className="px-5 md:px-20 lg:px-36 xl:px-56 mt-20">
        <DisplayResult SearchRecord={LIbrary?.at(0)} />
      </div>
    </div>
  );
}

export default SearchQueryResult;
