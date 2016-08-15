/**
 * @author liguoxian
 * @date 2016/2/14
 * @update 2016/2/18
 */
var route = [
    // 破解源
    // Newspapers
    [/groups\/edition/, 'newspaper_groups'],
    [/newspapers/, 'newspaper_providers'],
    [/categories\/source/, 'newspaper_categories'],
    [/news\/articles/, 'stories'],
    // Headlines
    [/headlines\/user\/group/, 'stories'],
    // Topics
    [/topics\/navigations/, 'topics_list'],
    [/topics\/\d+/, 'topics_single'],
    [/news\/topic\/content/, 'stories'],
    // 合作源
    [/api-news\.dailyhunt\.in\/api\/v1\/newsfeed/, 'json_list'],
    [/ucbrowser\.dailyhunt\.in\/news/, 'article']
];

module.exports = function() {
    return {
        route: route
    };
};
