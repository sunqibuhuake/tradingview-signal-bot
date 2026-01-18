import akshare as ak
import os
import json
stock_zh_a_spot_em_df = ak.stock_zh_a_spot_em()

# 按总市值降序排序，取前20
stock_zh_a_spot_em_df = stock_zh_a_spot_em_df.sort_values(by='总市值', ascending=False).head(20)

# save as json
# 序号      代码     名称    最新价    涨跌幅  ...          流通市值    涨速  5分钟涨跌  60日涨跌幅  年初至今涨跌幅

list = []
for index, row in stock_zh_a_spot_em_df.iterrows():
    list.append({
        'code': row['代码'],
        'name': row['名称'],
    })

output_path = os.path.join(os.path.dirname(__file__), '..', 'config', 'stocks.json')
# save as json (utf-8, no unicode)
with open(output_path, 'w') as f:
    json.dump(list, f, ensure_ascii=False, indent=4)