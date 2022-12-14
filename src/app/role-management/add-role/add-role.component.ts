import { Component, OnInit, Inject } from '@angular/core';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA
} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { RoleManagementService } from '../../utils/services/role-management.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleManagementSharedServiceService } from 'src/app/utils/services/role-management-shared-service.service';
import { AccessArr } from 'src/app/utils/types/AccessResponceTypes';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-role',
	templateUrl: './add-role.component.html',
	styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
	addRole!: FormGroup;
	constructor(
		private fb: FormBuilder,
		private roleService: RoleManagementService,
		public dialogRef: MatDialogRef<AddRoleComponent>,
		private roleSharedService: RoleManagementSharedServiceService,
		@Inject(MAT_DIALOG_DATA) public data: AccessArr
	) {
		this.addRole = this.fb.group({
			role: ['', Validators.required]
		});
	}

	ngOnInit(): void {
		if (this.data.action === 'edit') {
			this.addRole.get('role').patchValue(this.data.role.role);
		}
	}
	onSubmit() {
		if (this.data.action === 'new') {
			this.roleService.addRole(this.addRole.value).subscribe((res) => {
				this.roleSharedService.sendRoleEvent('true');
				Swal.fire('Added Successfully');
				this.dialogRef.close();
			});
		}
		if (this.data.action === 'edit') {
			this.roleService
				.updateRole(this.data.role.roleId._id, this.addRole.value)
				.subscribe((res) => {
					this.roleSharedService.sendRoleEvent(true);
					Swal.fire('Update Successfully');
					this.dialogRef.close('true');
				});
		}
	}
	close() {
		this.dialogRef.close();
	}
}
