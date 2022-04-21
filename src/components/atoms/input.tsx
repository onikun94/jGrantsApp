import Router from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

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
        sort: data.sort,
        order: data.order,
        acceptance: data.acceptance,
        prefecture: data.prefecture,
        industry: data.industry,
        employ: data.employ,
      },
    });
  };
  console.log('watch', watch('keyword'));
  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('keyword', { required: true })} placeholder="検索語" />
        {errors.keyword && <span className="text-rose-500">This field is required</span>}
        <select {...register('prefecture')}>
          <option value="北海道">北海道</option>
          <option value="青森県">青森</option>
          <option value="岩手県">岩手県</option>
          <option value="宮城県">宮城県</option>
          <option value="秋田県">秋田県</option>
          <option value="山形県">山形県</option>
          <option value="福島県">福島県</option>
          <option value="東京都">東京都</option>
        </select>
        <select {...register('industry')}>
          <option value="">業種を指定してください</option>
          <option value="農業，林業">農業，林業</option>
          <option value="漁業">漁業</option>
          <option value="鉱業，採石業，砂利採取業">鉱業，採石業，砂利採取業</option>
          <option value="建設業">建設業</option>
          <option value="製造業">製造業</option>
          <option value="電気・ガス・熱供給・水道業">電気・ガス・熱供給・水道業</option>
          <option value="情報通信業">情報通信業</option>
          <option value="運輸業，郵便業">運輸業，郵便業</option>
          <option value="卸売業，小売業">卸売業，小売業</option>
          <option value="金融業，保険業">金融業，保険業</option>
          <option value="不動産業，物品賃貸業">不動産業，物品賃貸業</option>
          <option value="学術研究，専門・技術サービス業">学術研究，専門・技術サービス業</option>
          <option value="宿泊業，飲食サービス業">宿泊業，飲食サービス業</option>
          <option value="生活関連サービス業，娯楽業">生活関連サービス業，娯楽業</option>
          <option value="教育，学習支援業">教育，学習支援業</option>
          <option value="医療，福祉">医療，福祉</option>
          <option value="複合サービス事業">複合サービス事業</option>
          <option value="サービス業（他に分類されないもの）">
            サービス業（他に分類されないもの）
          </option>
          <option value="公務（他に分類されるものを除く）">公務（他に分類されるものを除く）</option>
          <option value="分類不能の産業">分類不能の産業</option>
        </select>
        {/* <label>従業員数：</label>
        <select {...register('employ')}>
          <option value="従業員の制約なし">従業員の制約なし</option>
          <option value="5名以下">5名以下</option>
          <option value="20名以下">20名以下</option>
          <option value="50名以下">50名以下</option>
          <option value="100名以下">100名以下</option>
          <option value="300名以下">300名以下</option>
          <option value="900名以下">900名以下</option>
          <option value="901名以上">901名以上</option>
        </select>
        <br /> */}

        {/* <label>並び替え：</label>
        <select {...register('sort')}>
          <option value="created_date">作成日</option>
          <option value="acceptance_start_datetime">募集開始日</option>
          <option value="acceptance_end_datetime">募集終了日</option>
        </select>
        <br />
        <select {...register('order')}>
          <option value="ASC">昇順</option>
          <option value="DESC">降順</option>
        </select>
        <br /> */}
        <select {...register('acceptance')}>
          <option value={0}>期間内絞り込みなし</option>
          <option value={1}>期間内絞り込みあり</option>
        </select>
        <button type="submit">検索</button>
      </form>
    </div>
  );
};
