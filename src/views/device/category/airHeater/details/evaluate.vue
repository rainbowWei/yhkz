<template>
  <div class="evaluate">
    <div class="title">热风炉运行评价表</div>
    <p>a、经济性</p>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="target" label="指标" width="180"></el-table-column>
      <el-table-column label="1#热风炉">
        <el-table-column prop="current" label="当前烧炉"></el-table-column>
        <el-table-column prop="previous" label="上次烧炉"></el-table-column>
        <el-table-column prop="last" label="前次烧炉"></el-table-column>
      </el-table-column>
      <el-table-column label="2#热风炉">
        <el-table-column prop="current2" label="当前烧炉"></el-table-column>
        <el-table-column prop="previous2" label="上次烧炉"></el-table-column>
        <el-table-column prop="last2" label="前次烧炉"></el-table-column>
      </el-table-column>
      <el-table-column label="3#热风炉">
        <el-table-column prop="current3" label="当前烧炉"></el-table-column>
        <el-table-column prop="previous3" label="上次烧炉"></el-table-column>
        <el-table-column prop="last3" label="前次烧炉"></el-table-column>
      </el-table-column>
      <el-table-column label="4#热风炉">
        <el-table-column prop="current4" label="当前烧炉"></el-table-column>
        <el-table-column prop="previous4" label="上次烧炉"></el-table-column>
        <el-table-column prop="last4" label="前次烧炉"></el-table-column>
      </el-table-column>
    </el-table>
    <p>b、稳定性</p>
    <el-table :data="tableData2" style="width: 100%">
      <el-table-column prop="target" label="分项指标"></el-table-column>
      <el-table-column label="1#热风炉">
        <el-table-column prop="coal" label="煤气"></el-table-column>
        <el-table-column prop="air" label="空气"></el-table-column>
        <el-table-column prop="vault" label="拱顶"></el-table-column>
        <el-table-column prop="waste" label="废气"></el-table-column>
        <el-table-column prop="wind" label="风温"></el-table-column>
        <el-table-column prop="gather" label="汇总"></el-table-column>
      </el-table-column>
      <el-table-column label="2#热风炉">
        <el-table-column prop="coal2" label="煤气"></el-table-column>
        <el-table-column prop="air2" label="空气"></el-table-column>
        <el-table-column prop="vault2" label="拱顶"></el-table-column>
        <el-table-column prop="waste2" label="废气"></el-table-column>
        <el-table-column prop="wind2" label="风温"></el-table-column>
        <el-table-column prop="gather2" label="汇总"></el-table-column>
      </el-table-column>
      <el-table-column label="3#热风炉">
        <el-table-column prop="coal3" label="煤气"></el-table-column>
        <el-table-column prop="air3" label="空气"></el-table-column>
        <el-table-column prop="vault3" label="拱顶"></el-table-column>
        <el-table-column prop="waste3" label="废气"></el-table-column>
        <el-table-column prop="wind3" label="风温"></el-table-column>
        <el-table-column prop="gather3" label="汇总"></el-table-column>
      </el-table-column>
      <el-table-column label="4#热风炉">
        <el-table-column prop="coal4" label="煤气"></el-table-column>
        <el-table-column prop="air4" label="空气"></el-table-column>
        <el-table-column prop="vault4" label="拱顶"></el-table-column>
        <el-table-column prop="waste4" label="废气"></el-table-column>
        <el-table-column prop="wind4" label="风温"></el-table-column>
        <el-table-column prop="gather4" label="汇总"></el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          target: '拱顶温度最大值（℃）',
          current: '王小虎',
          previous: '上海',
          last: '普陀区',
          current2: 'rainbow',
          previous2: '上海',
          last2: '普陀区',
          current3: 'caihong',
          previous3: '上海',
          last3: '普陀区',
          current4: '彩虹',
          previous4: '上海',
          last4: '普陀区'
        },
        {
          target: '拱顶温度最大值（℃）',
          current: '王小虎',
          previous: '上海',
          last: '普陀区',
          current2: 'rainbow',
          previous2: '上海',
          last2: '普陀区',
          current3: 'caihong',
          previous3: '上海',
          last3: '普陀区',
          current4: '彩虹',
          previous4: '上海',
          last4: '普陀区'
        },
        {
          target: '拱顶温度最大值（℃）',
          current: '王小虎',
          previous: '上海',
          last: '普陀区',
          current2: 'rainbow',
          previous2: '上海',
          last2: '普陀区',
          current3: 'caihong',
          previous3: '上海',
          last3: '普陀区',
          current4: '彩虹',
          previous4: '上海',
          last4: '普陀区'
        },
        {
          target: '拱顶温度最大值（℃）',
          current: '王小虎',
          previous: '上海',
          last: '普陀区',
          current2: 'rainbow',
          previous2: '上海',
          last2: '普陀区',
          current3: 'caihong',
          previous3: '上海',
          last3: '普陀区',
          current4: '彩虹',
          previous4: '上海',
          last4: '普陀区'
        },
        {
          target: '拱顶温度最大值（℃）',
          current: '王小虎',
          previous: '上海',
          last: '普陀区',
          current2: 'rainbow',
          previous2: '上海',
          last2: '普陀区',
          current3: 'caihong',
          previous3: '上海',
          last3: '普陀区',
          current4: '彩虹',
          previous4: '上海',
          last4: '普陀区'
        },
        {
          target: '拱顶温度最大值（℃）',
          current: '王小虎',
          previous: '上海',
          last: '普陀区',
          current2: 'rainbow',
          previous2: '上海',
          last2: '普陀区',
          current3: 'caihong',
          previous3: '上海',
          last3: '普陀区',
          current4: '彩虹',
          previous4: '上海',
          last4: '普陀区'
        },
        {
          target: '拱顶温度最大值（℃）',
          current: '王小虎',
          previous: '上海',
          last: '普陀区',
          current2: 'rainbow',
          previous2: '上海',
          last2: '普陀区',
          current3: 'caihong',
          previous3: '上海',
          last3: '普陀区',
          current4: '彩虹',
          previous4: '上海',
          last4: '普陀区'
        },
        {
          target: '拱顶温度最大值（℃）',
          current: '王小虎',
          previous: '上海',
          last: '普陀区',
          current2: 'rainbow',
          previous2: '上海',
          last2: '普陀区',
          current3: 'caihong',
          previous3: '上海',
          last3: '普陀区',
          current4: '彩虹',
          previous4: '上海',
          last4: '普陀区'
        },
        {
          target: '拱顶温度最大值（℃）',
          current: '王小虎',
          previous: '上海',
          last: '普陀区',
          current2: 'rainbow',
          previous2: '上海',
          last2: '普陀区',
          current3: 'caihong',
          previous3: '上海',
          last3: '普陀区',
          current4: '彩虹',
          previous4: '上海',
          last4: '普陀区'
        },
        {
          target: '拱顶温度最大值（℃）',
          current: '王小虎',
          previous: '上海',
          last: '普陀区',
          current2: 'rainbow',
          previous2: '上海',
          last2: '普陀区',
          current3: 'caihong',
          previous3: '上海',
          last3: '普陀区',
          current4: '彩虹',
          previous4: '上海',
          last4: '普陀区'
        },
        {
          target: '拱顶温度最大值（℃）',
          current: '王小虎',
          previous: '上海',
          last: '普陀区',
          current2: 'rainbow',
          previous2: '上海',
          last2: '普陀区',
          current3: 'caihong',
          previous3: '上海',
          last3: '普陀区',
          current4: '彩虹',
          previous4: '上海',
          last4: '普陀区'
        }
      ],
      tableData2: [
        {
          target: '指标（%）',
          coal: '122',
          air: '333',
          vault: '1089',
          waste: '1463',
          wind: '234',
          gather: '4444',
          coal2: '122',
          air2: '333',
          vault2: '1089',
          waste2: '1463',
          wind2: '234',
          gather2: '4444',
          coal3: '122',
          air3: '333',
          vault3: '1089',
          waste3: '1463',
          wind3: '234',
          gather3: '4444',
          coal4: '122',
          air4: '333',
          vault4: '1089',
          waste4: '1463',
          wind4: '234',
          gather4: '4444'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.el-table .cell {
  text-align: center;
}
.el-table th > .cell {
  text-align: center;
}
.el-table td,
.el-table th {
  padding: 7px 0;
}
.el-table thead {
  background: #F5F7FA;
  color: #000;
}
.el-table__body, .el-table__footer, .el-table__header{
  table-layout:inherit
}
</style>
<style lang="scss" scoped>
.evaluate {
  // width: 1200px;
  margin: 0 auto;
  font-size: 14px;
  padding-bottom: 40px;
}
.title {
  text-align: center;
  font-size: 20px;
  line-height: 50px;
}
p {
  line-height: 30px;
  text-indent: 10px;
}
</style>
