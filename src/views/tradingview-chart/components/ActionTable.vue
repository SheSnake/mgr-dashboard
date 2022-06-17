<template>
  <el-table
    id="action_table"
    :default-sort="{ prop: 'date', order: 'descending' }"
    :data="tradeDataLogs"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    @row-click="onTradeLogClick"
  >
    <el-table-column prop="id" label="记录标识" sortable width="80" />
    <el-table-column prop="tsUsec" label="时间戳(US)" sortable width="160">
    </el-table-column>
    <el-table-column prop="date" label="时间" sortable width="160" />
    <el-table-column prop="symbolId" label="交易商品编号" width="120"/>
    <el-table-column
      prop="type"
      label="操作类型"
      width="120"
      column-key="type"
      :filters="logTypeSelect"
      :filter-method="filterHandler"
    >
      <template #default="scope">
        <el-tag
          :type="scope.row.type === 4 ? '' : 'success'"
          disable-transitions
          >{{ getLogTypeName(scope.row.type) }}</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column prop="tradeSubState" label="交易状态" width="180"
      :filters="tradeSubStateSelect"
      :filter-method="filterHandler"
    >
      <template #default="scope">
        <el-tag
          :type="scope.row.type === 4 ? '' : 'success'"
          disable-transitions
          >{{ getTradeStateName(scope.row.trade_sub_state) }}</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column prop="accProfit" label="累计收益" width="120"/>
    <el-table-column prop="curProfit" label="本次收益" width="120"/>
    <el-table-column prop="info" label="具体信息" />
    <div style="text-align: center;margin-top: 30px;">
      <el-pagination
          background
          layout="prev, pager, next"
          :total="totalLogNum"
          :page-size="pageSize"
          :page-sizes="pageSizes"
          :pager-count="pagerCount"
          @current-change="currentChange">
      </el-pagination>
    </div>
  </el-table>
</template>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-lighter);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-lighter);
}
</style>

<script src="./ActionTable.ts" lang="ts"></script>