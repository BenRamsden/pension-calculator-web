# pension-calculator-web-aws

See also: [Azure alternative](https://github.com/BenRamsden/pension-calculator-web-azure).

<img src="./docs/images/pension_calculator_preview_11_04_2024.png" />

# Local Development

## Setup

- Put defaults into `.env.development` matching `app/src/config/index.ts` to speed up development.

## Run app

```shell
cd app
yarn
yarn dev
```

# Manual deployment steps

## Domain and Hosted Zone

- Create a hosted zone in Route 53

- Set `static-website:targetDomain` in `pulumi/Pulumi.prod.yaml` to this domain

## Deploy

```shell
cd pulumi
yarn
pulumi up
```

# Updating source data

> Data calculations are based on are stored in `app/src/data/`. Below are the sources and transformations applied to this data.

- Life expectancy projection [ONS](https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/lifeexpectancies/datasets/expectationoflifeprincipalprojectionunitedkingdom)
  - Books
    - males cohort ex
    - females cohort ex
  - Conversion steps
    - delete text
    - select all
    - paste into another doc
    - save as csv
    - use csv to json converter
- Salary percentiles by age [ONS](https://occaminvesting.co.uk/average-uk-salary-by-age/)
- State pension age [Which](https://www.which.co.uk/money/pensions-and-retirement/state-pension/state-pension-age-calculator-aIGrn9D5tei4)
- Earnings over time [ONS](https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours/datasets/agegroupashetable6)
  - Doc: `Annual pay - Gross 2022`
  - Book: `Full-Time`
  - Column: `Median`
