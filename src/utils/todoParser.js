const todoParser = {
  workflow_IdcBuildContract: function (groupName, taskGroup) {
    let renderInfo = {};
    if (taskGroup.length == 0) {
        return false;
    }
    renderInfo.taskName = '合同预审流程';
    renderInfo.taskCount = taskGroup.length;
    renderInfo.callback = function () {
        window.location.href = '/web/contract/review/contractlist/indexview?from=todo&taskgroup=' + encodeURI(groupName);
    };
    return renderInfo;
  },
  defaultTaskParser: function (groupName, taskGroup) {
    var renderInfo = {};
    if (taskGroup.length === 0) {
        return false;
    }
    renderInfo.taskName = taskGroup[0].extra_data.taskDesc ? taskGroup[0].extra_data.taskDesc : taskGroup[0].title;
    renderInfo.taskCount = taskGroup.length;
    renderInfo.callback = function () {
        window.location.href = '/web/todo/task/default/index?taskgroup=' + encodeURI(groupName);
    };
    return renderInfo;
  }
}

export default todoParser
