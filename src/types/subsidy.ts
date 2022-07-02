export type SubsidyType = {
  acceptance_end_datetime: string;
  acceptance_start_datetime: string;
  id: string;
  name: string;
  subsidy_max_limit: number;
  target_area_search: string;
  target_number_of_employees: string;
  title: string;
};

export type SubsidyDetailType = {
  acceptance_end_datetime: string;
  acceptance_start_datetime: string;
  application_form: [{ name: string; data: string }];
  application_guidelines: [{ name: string; data: string }];
  detail: string;
  front_subsidy_detail_page_url: string;
  id: string;
  industry: string;
  is_enable_multiple_request: string;
  name: string;
  outline_of_grant: [name: string, data: string];
  project_end_deadline: string;
  request_reception_presence: string;
  subsidy_catch_phrase: string;
  subsidy_max_limit: number;
  subsidy_rate: string;
  target_area_detail: string;
  target_number_of_employees: string;
  title: { title: string } | ((currVal: { title: string }) => { title: string });
  use_purpose: string;
};

export type AllSubsidyDetailType = {
  metadata: { resultset: { count: number }; type: string };
  result: SubsidyDetailType[];
};
