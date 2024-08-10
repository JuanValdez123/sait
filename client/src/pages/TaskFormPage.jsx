import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { useTasks } from "../context/tasksContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
import Alert from "../components/Alert";
import BarChartComponent from "../components/GraficoBarrasConsumoEnergetico";
import PieChartComponent from "../components/GraficoTortaFuentesEnergia";
import LineChartComponent from "../components/GraficoLineasUsoEnergetico";
import AreaChartComponent from "../components/GraficoAreaProduccionEnergetica";
import DataTableComponent from "../components/TablaRegistrosDatosEnergeticos";
import ValueCard from "../components/TarjetaResumenEnergetico";
import GaugeChartComponent from "../components/GraficoVelocimetroEficiencia";
import DoughnutChartComponent from "../components/GraficoDonaMezclaEnergetica";

dayjs.extend(utc);

export function TaskFormPage() {
  const { createTask, getTask, updateTask, tasks } = useTasks();
  const navigate = useNavigate();
  const params = useParams();
  const [alertVisible, setAlertVisible] = useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        await updateTask(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      } else {
        await createTask({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }

      setAlertVisible(true);

      setTimeout(() => {
        setAlertVisible(false);
        navigate("/tasks");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue(
          "date",
          task.date ? dayjs(task.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue("completed", task.completed);
      }
    };
    loadTask();
  }, [params.id, getTask, setValue]);

  // Datos ficticios para las gráficas y otros componentes
  const barChartData = [
    { name: 'Task A', completed: 2 },
    { name: 'Task B', completed: 1 },
    { name: 'Task C', completed: 3 },
    { name: 'Task D', completed: 4 },
    { name: 'Task E', completed: 1 },
  ];

  const pieChartData = [
    { name: 'Completed', value: 5 },
    { name: 'Pending', value: 10 },
  ];

  const lineChartData = [
    { name: 'Week 1', value: 10 },
    { name: 'Week 2', value: 15 },
    { name: 'Week 3', value: 7 },
    { name: 'Week 4', value: 20 },
  ];

  const areaChartData = [
    { name: 'Week 1', value: 10 },
    { name: 'Week 2', value: 15 },
    { name: 'Week 3', value: 7 },
    { name: 'Week 4', value: 20 },
  ];

  const taskData = [
    { title: 'Task 1', description: 'Description 1', date: '2023-01-01', completed: true },
    { title: 'Task 2', description: 'Description 2', date: '2023-01-02', completed: false },
  ];

  const valueCardData = [
    { label: 'Total Tasks', amount: tasks.length },
    { label: 'Completed Tasks', amount: tasks.filter(task => task.completed).length },
    { label: 'Pending Tasks', amount: tasks.filter(task => !task.completed).length },
  ];

  const gaugeValue = tasks.length === 0 ? 0 : tasks.filter(task => task.completed).length / tasks.length;

  const doughnutChartData = [
    { label: 'Completed', value: 5 },
    { label: 'Pending', value: 10 },
    { label: 'In Progress', value: 7 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-xl">
        <div className="flex justify-center">
          <Card className="equal-card">
            <Alert message="Task saved successfully!" visible={alertVisible} />
            <form onSubmit={handleSubmit(onSubmit)}>
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                name="title"
                placeholder="Title"
                {...register("title", { required: true })}
                autoFocus
              />
              {errors.title && (
                <p className="text-red-500 text-xs italic">Please enter a title.</p>
              )}
              <Label htmlFor="description">Description</Label>
              <Textarea
                name="description"
                id="description"
                rows="3"
                placeholder="Description"
                {...register("description")}
              ></Textarea>
              <Label htmlFor="date">Date</Label>
              <Input type="date" name="date" {...register("date")} />
              <Button>Save</Button>
            </form>
          </Card>
        </div>
        <div className="flex justify-center">
          <Card className="equal-card">
            <BarChartComponent data={barChartData} title="Chart: Task Overview" />
          </Card>
        </div>
        <div className="flex justify-center">
          <Card className="equal-card">
            <PieChartComponent data={pieChartData} title="Chart: Task Distribution" />
          </Card>
        </div>
        
        <div className="flex justify-center">
          <Card className="equal-card">
            <LineChartComponent data={lineChartData} title="Chart: Task Progress" />
          </Card>
        </div>
        
        <div className="flex justify-center">
          <Card className="equal-card">
            <AreaChartComponent data={areaChartData} title="Chart: Task Trends" />
          </Card>
        </div>
        <div className="flex justify-center">
          <Card className="equal-card">
            <h2 className="text-xl font-bold mb-4">Task Data Table</h2>
               <DataTableComponent data={taskData} />
           </Card>
        </div>
        <div className="flex justify-center">
          <Card className="equal-card">
            <ValueCard title="Task Summary" values={valueCardData} />
          </Card>
        </div>
        <div className="flex justify-center">
          <Card className="equal-card">
            <GaugeChartComponent title="Completion Rate" value={gaugeValue} />
          </Card>
        </div>
        <div className="flex justify-center">
          <Card className="equal-card">
            <DoughnutChartComponent title="Task Status" data={doughnutChartData} />
          </Card>
        </div>
      </div>
    </div>
  );
}
