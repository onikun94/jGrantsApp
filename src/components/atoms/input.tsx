import { GetStaticProps } from "next";
import Router from "next/router";
import { useEffect, useState, VFC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { getData } from "../../api/getData";

type Inputs = {
  keyword: string;
  sort: string;
  order: string;
  acceptance: number;
};

export const Input = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    Router.push({
      query: {
        keyword: data.keyword,
        sort: data.sort,
        order: data.order,
        acceptance: data.acceptance,
      },
    });
  };
  console.log("watch", watch("keyword"));
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue="中小企業"
          {...register("keyword", { required: true })}
        />
        {errors.keyword && <span>This field is required</span>}
        <br />
        {/* <input {...register("sort")} /> */}
        <select {...register("sort")}>
          <option value="created_date">作成日</option>
          <option value="acceptance_start_datetime">募集開始日</option>
          <option value="acceptance_end_datetime">募集終了日</option>
        </select>
        <br />
        <select {...register("order")}>
          <option value="ASC">昇順</option>
          <option value="DESC">降順</option>
        </select>
        <br />
        {/* <input {...register("acceptance")} /> */}
        <select {...register("acceptance")}>
          <option value={0}>期間内絞り込みあり</option>
          <option value={1}>期間内絞り込みなし</option>
        </select>
        <input type="submit" />
      </form>
      {/* <p>{money}</p> */}
    </>
  );
};
