import Router from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import indData from '../data/industry.json';
import prefData from '../data/prefecture.json';
import resData from '../data/restriction.json';

type Inputs = {
  keyword: string;
  sort: string;
  order: string;
  prefecture: string;
  industry: string;
  employ: string;
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
        acceptance: data.acceptance,
        prefecture: data.prefecture,
        industry: data.industry,
      },
    });
  };
  return (
    <div className="p-4 mb-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          id="inputText"
          type="text"
          {...register('keyword', { required: true })}
          placeholder="検索語"
        />
        {errors.keyword && <span className="text-rose-500">This field is required</span>}
        <select {...register('prefecture')}>
          {prefData.map((data) => {
            return (
              <option key={data.prefValue} value={data.prefValue}>
                {data.prefName}
              </option>
            );
          })}
        </select>
        <select {...register('industry')}>
          {indData.map((data) => {
            return (
              <option key={data.indValue} value={data.indValue}>
                {data.indName}
              </option>
            );
          })}
        </select>

        <select {...register('acceptance')}>
          {resData.map((data) => {
            return (
              <option key={data.resValue} value={data.resValue}>
                {data.resName}
              </option>
            );
          })}
        </select>
        <button type="submit">検索</button>
      </form>
    </div>
  );
};
