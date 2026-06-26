interface TaskAssignmentProps {
  assigneeName: string;
  taskTitle: string;
  taskDescription: string;
  dueDate: string;
  taskUrl: string;
}

export function taskAssignmentTemplate({
  assigneeName,
  taskTitle,
  taskDescription,
  dueDate,
  taskUrl,
}: TaskAssignmentProps): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
      <h2>Hi ${assigneeName},</h2>

      <p style="font-size: 16px;">You've been assigned a new task: </p>
      <p style="font-size: 18px; font-weight: bold; color: #007bff; margin: 8px 0;">${taskTitle}</p>

      <div style="border: 1px solid #ddd; padding: 12px 16px; border-radius: 6px; margin-bottom: 30px;">
        <p style="margin: 6px 0;"><strong>Description:</strong> ${taskDescription}</p>
        <p style="margin: 6px 0;"><strong>Due Date:</strong> ${dueDate}</p>
      </div>

      <a href="${taskUrl}" style="background-color: #007bff; padding: 12px 14px; border-radius: 5px; color: #fff;
      font-weight: 600; font-size: 16px; text-decoration: none;">
        View task
      </a>

      <p style="margin-top:20px; font-size: 14px; color: #6c757d;">
        Please make sure to review and complete it before the due date.
      </p>
    </div>
  `;
}
