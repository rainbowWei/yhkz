  <template>
  <div class="box">
    <div class="title">
      热风炉运行报表
      <ul class="condition">
        <li>
          <el-date-picker
            v-model="value2"
            type="datetimerange"
            :picker-options="pickerOptions"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right"
          ></el-date-picker>
        </li>
        <li class="btn query">查询</li>
        <li class="btn export">导出</li>
      </ul>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="time" label="时间" ></el-table-column>
      <el-table-column prop="hottemperature" label="热风温度（℃）"></el-table-column>
      <el-table-column prop="coldtemperature" label="冷风温度（℃）"></el-table-column>
      <el-table-column prop="gastemperature" label="煤气预热后的温度（℃）"></el-table-column>
      <el-table-column prop="airtemperature" label="助空预热后的温度（℃）"></el-table-column>
      <el-table-column prop="gaspressure" label="煤气预热后的压强（Kpa）"></el-table-column>
      <el-table-column prop="airpressure" label="助空预热后的压强（Kpa）"></el-table-column>
      <el-table-column prop="gasvolume" label="煤气量累计（万m³）"></el-table-column>
      <el-table-column prop="airvolume" label="送气量累积（万m³）"></el-table-column>
      <el-table-column prop="selfcontro" label="1#热风炉自控率（%）"></el-table-column>
      <el-table-column prop="selfcontro2" label="2#热风炉自控率（%）"></el-table-column>
      <el-table-column prop="selfcontro3" label="3#热风炉自控率（%）"></el-table-column>
      <el-table-column prop="selfcontro4" label="4#热风炉自控率（%）"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: '',
      tableData: [
        {
          time: '2016-05-02',
          hottemperature: '1234',
          coldtemperature: '4444',
          gastemperature: '23556',
          airtemperature: '23556',
          gaspressure: '3456.8',
          airpressure: '3456.8',
          gasvolume: '3456.8',
          airvolume: '3456.8',
          selfcontro: '78',
          selfcontro2: '56',
          selfcontro3: '44',
          selfcontro4: '67'
        },
        {
          time: '2016-05-02',
          hottemperature: '1234',
          coldtemperature: '4444',
          gastemperature: '23556',
          airtemperature: '23556',
          gaspressure: '3456.8',
          airpressure: '3456.8',
          gasvolume: '3456.8',
          airvolume: '3456.8',
          selfcontro: '78',
          selfcontro2: '56',
          selfcontro3: '44',
          selfcontro4: '67'
        },
        {
          time: '2016-05-02',
          hottemperature: '1234',
          coldtemperature: '4444',
          gastemperature: '23556',
          airtemperature: '23556',
          gaspressure: '3456.8',
          airpressure: '3456.8',
          gasvolume: '3456.8',
          airvolume: '3456.8',
          selfcontro: '78',
          selfcontro2: '56',
          selfcontro3: '44',
          selfcontro4: '67'
        },
        {
          time: '2016-05-02',
          hottemperature: '1234',
          coldtemperature: '4444',
          gastemperature: '23556',
          airtemperature: '23556',
          gaspressure: '3456.8',
          airpressure: '3456.8',
          gasvolume: '3456.8',
          airvolume: '3456.8',
          selfcontro: '78',
          selfcontro2: '56',
          selfcontro3: '44',
          selfcontro4: '67'
        },
        {
          time: '2016-05-02',
          hottemperature: '1234',
          coldtemperature: '4444',
          gastemperature: '23556',
          airtemperature: '23556',
          gaspressure: '3456.8',
          airpressure: '3456.8',
          gasvolume: '3456.8',
          airvolume: '3456.8',
          selfcontro: '78',
          selfcontro2: '56',
          selfcontro3: '44',
          selfcontro4: '67'
        },
        {
          time: '2016-05-02',
          hottemperature: '1234',
          coldtemperature: '4444',
          gastemperature: '23556',
          airtemperature: '23556',
          gaspressure: '3456.8',
          airpressure: '3456.8',
          gasvolume: '3456.8',
          airvolume: '3456.8',
          selfcontro: '78',
          selfcontro2: '56',
          selfcontro3: '44',
          selfcontro4: '67'
        },
        {
          time: '2016-05-02',
          hottemperature: '1234',
          coldtemperature: '4444',
          gastemperature: '23556',
          airtemperature: '23556',
          gaspressure: '3456.8',
          airpressure: '3456.8',
          gasvolume: '3456.8',
          airvolume: '3456.8',
          selfcontro: '78',
          selfcontro2: '56',
          selfcontro3: '44',
          selfcontro4: '67'
        },
        {
          time: '2016-05-02',
          hottemperature: '1234',
          coldtemperature: '4444',
          gastemperature: '23556',
          airtemperature: '23556',
          gaspressure: '3456.8',
          airpressure: '3456.8',
          gasvolume: '3456.8',
          airvolume: '3456.8',
          selfcontro: '78',
          selfcontro2: '56',
          selfcontro3: '44',
          selfcontro4: '67'
        },
        {
          time: '2016-05-02',
          hottemperature: '1234',
          coldtemperature: '4444',
          gastemperature: '23556',
          airtemperature: '23556',
          gaspressure: '3456.8',
          airpressure: '3456.8',
          gasvolume: '3456.8',
          airvolume: '3456.8',
          selfcontro: '78',
          selfcontro2: '56',
          selfcontro3: '44',
          selfcontro4: '67'
        },
        {
          time: '2016-05-02',
          hottemperature: '1234',
          coldtemperature: '4444',
          gastemperature: '23556',
          airtemperature: '23556',
          gaspressure: '3456.8',
          airpressure: '3456.8',
          gasvolume: '3456.8',
          airvolume: '3456.8',
          selfcontro: '78',
          selfcontro2: '56',
          selfcontro3: '44',
          selfcontro4: '67'
        },
        {
          time: '2016-05-02',
          hottemperature: '1234',
          coldtemperature: '4444',
          gastemperature: '23556',
          airtemperature: '23556',
          gaspressure: '3456.8',
          airpressure: '3456.8',
          gasvolume: '3456.8',
          airvolume: '3456.8',
          selfcontro: '78',
          selfcontro2: '56',
          selfcontro3: '44',
          selfcontro4: '67'
        },
        {
          time: '2016-05-02',
          hottemperature: '1234',
          coldtemperature: '4444',
          gastemperature: '23556',
          airtemperature: '23556',
          gaspressure: '3456.8',
          airpressure: '3456.8',
          gasvolume: '3456.8',
          airvolume: '3456.8',
          selfcontro: '78',
          selfcontro2: '56',
          selfcontro3: '44',
          selfcontro4: '67'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.el-date-editor--datetimerange.el-input__inner {
  width: 370px;
}
.el-range-editor.el-input__inner {
  padding: 0 0 0 10px;
  margin-top: 15px;
}
.el-input__inner {
  height: 32px;
  line-height: 32px;
}
.el-table td, .el-table th{
  text-align: center;
}
.el-table thead {
  background: #F5F7FA;
  color: #000;
}
</style>
<style lang="scss" scoped>
.box {
  padding-bottom: 80px;
}
.title {
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-weight: bold;
  font-size: 20px;
  background: #5290b7;
  text-align: center;
  color: #fff;
  position: relative;
  .condition {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 14px;
    font-weight: normal;
    li {
      float: left;
      margin: 0 5px;
      input {
        width: 80px;
        height: 25px;
        font-size: 14px;
        background: #fff;
        margin-left: 10px;
        text-align: center;
      }
    }
    .day {
      input {
        width: 40px;
      }
    }
    .btn {
      width: 60px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      background: #eee;
      border-radius: 6px;
      margin-top: 15px;
      color: #000;
    }
    .query {
      background: #409eff;
      color: #fff;
    }
  }
}
</style>
