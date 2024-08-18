
import SearchPageContent from "@/components/searchSuspence/SearchPageContent";
import {Suspense} from "react";

export default function SearchPage() {


    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchPageContent />
        </Suspense>
    );
}