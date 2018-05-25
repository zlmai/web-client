//制定任务分组规则
const groupParser = {
  workflow: function (task) {
    let noNeedDivideFlowNameList = ['IdcBuildContract', 'ocbuildprocess', 'liaisonwork','liaisonworkv2','ocbuild','NetworkRequirementDefault','AcdcBuild','ocAbolition','ocoverseasconstruction','idc_open_audit'], index, isNeedDivideByTask = false;
    for (index = 0; index < noNeedDivideFlowNameList.length; index++) {
      if (noNeedDivideFlowNameList[index] === task.category_1) {
          isNeedDivideByTask = true;
      }
    }
    if (isNeedDivideByTask) {
      return 'workflow_' + task.category_1;
    } else {
        return 'workflow_' + task.category_1 + '_'
        + (task.extra_data.taskName ? task.extra_data.taskName : '')
        + (task.extra_data.process_node_user_id ? task.extra_data.process_node_user_id : '');
    }
  }
}

export default groupParser