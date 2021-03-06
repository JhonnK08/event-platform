import { useGetLessonsQuery } from "../graphql/generated";
import Lesson from "./Lesson";

function Sidebar() {
    const { data } = useGetLessonsQuery();

    console.log("data", data);

    return (
        <aside className="lg:w-[348px] w-full lg:block hidden bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-600 block">
                Cronograma de aulas
            </span>
            <div className="flex flex-col gap-8">
                {data?.lessons.map((lesson) => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    );
                })}
            </div>
        </aside>
    );
}

export default Sidebar;
