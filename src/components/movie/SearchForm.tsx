'use client';

import { useForm } from "react-hook-form";
import React from "react";
import { useRouter } from "next/navigation";
import { IKeyWord } from "@/interfaces";
import { Input } from "@chakra-ui/react";

const SearchForm = () => {
    const { handleSubmit, reset, register } = useForm<IKeyWord>();
    const router = useRouter();

    const search = (keyWord: IKeyWord) => {
        console.log(keyWord.keyword);
        reset();
        router.push(`/movies/search?query=${keyWord.keyword}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <Input
                    variant="flushed"
                    type="text"
                    placeholder="Search"
                    size="sm"
                    fontSize="l"
                    width="40"
                    {...register("keyword")}
                />
            </form>
        </div>
    );
};

export { SearchForm };
