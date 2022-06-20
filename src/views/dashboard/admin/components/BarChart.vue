<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="8">
        <el-date-picker
          v-model="dataRange"
          @change="onSelect"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-col>

      <el-col :span="6">
        <el-select v-model="curSymbolId" placeholder="请选择">
          <el-option
            v-for="item in symbolOptions"
            :key="item.symbolId"
            :label="item.innerSymbol"
            :value="item.symbolId"
          >
          </el-option>
        </el-select>
      </el-col>

      <el-col :span="6">
        <el-select v-model="aggrIntervalSec" placeholder="请选择">
          <el-option
            v-for="item in aggrIntervalSecOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>

      <el-col :span="4">
         <el-button @click="onSelect">确认</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <div
        ref="chartsDiv"
        :style="{height: height, width: width}"
        :class="className"
      ></div>
    </el-row>
  </div>
</template>

<script lang="ts" src="./buysellchart.ts"></script>

<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
