export const slicePageArr = (totalPage:number, limit:number):number[][] => {
    const pageArray = [];
    
    // 1. 1부터 totalPage까지의 숫자를 배열에 추가
    for (let i = 1; i <= totalPage; i++) {
        pageArray.push(i);
    }

    const pageGroups = [];

    // 2. 배열을 limit 크기로 자르고 2차원 배열에 추가
    while (pageArray.length > 0) {
        pageGroups.push(pageArray.splice(0, limit));
    }

    return pageGroups;
};