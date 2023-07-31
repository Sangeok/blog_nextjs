import Image from "next/image";
import myFicture from "../../public/images/mypicture.jpg";

const About:React.FC = () => {
    return (
        <div className="flex justify-center py-10">
            <div className="flex flex-col">
                <div className="text-center pb-5 text-3xl">About me</div>
                {/* 최적화된 image */}
                <Image src={myFicture}
                width={500}
                height={500}
                alt="이미지"
                className="align-middle mx-auto pb-10"
                />
                
                <div className="max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="pb-2 text-lg font-bold">
                        함상억
                    </div>
                    <div className="pb-2">
                        Frontend Enginner
                    </div>
                    <div className="pb-2 text-gray-500 text-xs">
                        Email : hamsoo159@naver.com
                    </div>
                    <div className="text-sm text-gray-700 pb-2">
                        뒤돌아 봤을 때 현재의 내가 과거의 나보다 발전해 있기를 바라는 사람입니다.
                        <br/>
                        어찌보면 너무나 당연한 이야기지만, 제가 생각하는 발전은 스스로가 만족할 수 있는 발전이기 때문에 그토록 쉽진 않습니다. 저는 제 자신에게 엄격하기 때문입니다.
                        이에따라 발전의 밑거름이 되는 목표가 생기면 그 목표를 이루기 위해 시간 가는 줄 모르고 몰두하는 것을 즐거워합니다.
                        <br/>
                        개발 직군 뿐만아니라 운동, 독서를 꾸준히 할 만큼 자기 계발에 관심이 많기 때문에 개발에 관심을 가지고 발전하겠다고 다짐한 순간, 하루하루가 저를 위한 큰 밑거름이 될 수 있음을 자부합니다.
                    </div>
                    <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
                    <div className="pb-2 text-lg font-bold">
                        Skill
                    </div>
                    <div className="pb-2 text-sm text-gray-700">
                        React, Nextjs, typescript, tailwindCss, MySql
                    </div>
                    <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
                    <div className="pb-2 text-lg font-bold">
                        Project
                    </div>
                    <div className="pb-2 indent-1 text-sm text-gray-700">
                        1. 요양시설 중개(ing)
                    </div>
                    <div className="pb-2 indent-1 text-sm text-gray-700">
                        2. 개인 블로그
                    </div>
                    <div className="pb-2 indent-1 text-sm text-gray-700">
                        3. RealTime Chatting(ing)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;